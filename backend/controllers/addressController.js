const Address = require("../models/Address");

// ============================================
// GET ALL MY ADDRESSES
// ============================================

const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({
      user: req.user._id,
    }).sort({
      isDefault: -1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      addresses,
    });
  } catch (error) {
    console.error("GET ADDRESSES ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to get addresses",
    });
  }
};

// ============================================
// ADD NEW ADDRESS
// ============================================

const addAddress = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      addressLine,
      city,
      state,
      pincode,
      landmark,
      isDefault,
    } = req.body;

    // Validate required fields
    if (
      !fullName ||
      !phone ||
      !addressLine ||
      !city ||
      !state ||
      !pincode
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required address fields",
      });
    }

    // Check if user already has addresses
    const existingAddresses = await Address.countDocuments({
      user: req.user._id,
    });

    // First address automatically becomes default
    const shouldBeDefault =
      existingAddresses === 0 ? true : Boolean(isDefault);

    // If this address is default,
    // remove default from all existing addresses
    if (shouldBeDefault) {
      await Address.updateMany(
        { user: req.user._id },
        { $set: { isDefault: false } }
      );
    }

    const address = await Address.create({
      user: req.user._id,
      fullName: fullName.trim(),
      phone: phone.trim(),
      addressLine: addressLine.trim(),
      city: city.trim(),
      state: state.trim(),
      pincode: pincode.trim(),
      landmark: landmark ? landmark.trim() : "",
      isDefault: shouldBeDefault,
    });

    res.status(201).json({
      success: true,
      message: "Address added successfully",
      address,
    });
  } catch (error) {
    console.error("ADD ADDRESS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to add address",
    });
  }
};

// ============================================
// UPDATE ADDRESS
// ============================================

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      fullName,
      phone,
      addressLine,
      city,
      state,
      pincode,
      landmark,
      isDefault,
    } = req.body;

    const address = await Address.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    // Update fields
    if (fullName !== undefined) {
      address.fullName = fullName.trim();
    }

    if (phone !== undefined) {
      address.phone = phone.trim();
    }

    if (addressLine !== undefined) {
      address.addressLine = addressLine.trim();
    }

    if (city !== undefined) {
      address.city = city.trim();
    }

    if (state !== undefined) {
      address.state = state.trim();
    }

    if (pincode !== undefined) {
      address.pincode = pincode.trim();
    }

    if (landmark !== undefined) {
      address.landmark = landmark.trim();
    }

    // Make this address default
    if (isDefault === true) {
      await Address.updateMany(
        {
          user: req.user._id,
          _id: { $ne: id },
        },
        {
          $set: { isDefault: false },
        }
      );

      address.isDefault = true;
    }

    await address.save();

    res.status(200).json({
      success: true,
      message: "Address updated successfully",
      address,
    });
  } catch (error) {
    console.error("UPDATE ADDRESS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update address",
    });
  }
};

// ============================================
// DELETE ADDRESS
// ============================================

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;

    const address = await Address.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    const wasDefault = address.isDefault;

    await address.deleteOne();

    // If deleted address was default,
    // make another address default
    if (wasDefault) {
      const nextAddress = await Address.findOne({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });

      if (nextAddress) {
        nextAddress.isDefault = true;
        await nextAddress.save();
      }
    }

    res.status(200).json({
      success: true,
      message: "Address deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ADDRESS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete address",
    });
  }
};

// ============================================
// SET DEFAULT ADDRESS
// ============================================

const setDefaultAddress = async (req, res) => {
  try {
    const { id } = req.params;

    const address = await Address.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    // Remove default from all user's addresses
    await Address.updateMany(
      {
        user: req.user._id,
      },
      {
        $set: { isDefault: false },
      }
    );

    // Set selected address as default
    address.isDefault = true;

    await address.save();

    res.status(200).json({
      success: true,
      message: "Default address updated successfully",
      address,
    });
  } catch (error) {
    console.error("SET DEFAULT ADDRESS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to set default address",
    });
  }
};

module.exports = {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
};