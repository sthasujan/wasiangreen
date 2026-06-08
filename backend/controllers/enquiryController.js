import Enquiry from "../models/Enquiry.js";

// GET all enquiries
export const getEnquiries = async (
  req,
  res
) => {
  try {
    const enquiries =
      await Enquiry.find().sort({
        createdAt: -1,
      });

    res.json(enquiries);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE enquiry status
export const updateEnquiryStatus =
  async (req, res) => {
    try {
      const enquiry =
        await Enquiry.findByIdAndUpdate(
          req.params.id,
          {
            status: req.body.status,
          },
          {
            new: true,
          }
        );

      if (!enquiry) {
        return res.status(404).json({
          message: "Enquiry not found",
        });
      }

      res.json(enquiry);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// DELETE enquiry
export const deleteEnquiry =
  async (req, res) => {
    try {
      const enquiry =
        await Enquiry.findById(
          req.params.id
        );

      if (!enquiry) {
        return res.status(404).json({
          message: "Enquiry not found",
        });
      }

      await enquiry.deleteOne();

      res.json({
        message:
          "Enquiry deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// CREATE new enquiry
export const createEnquiry = async (
  req,
  res
) => {
  try {
    const enquiry =
      await Enquiry.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        customerType:
          req.body.customerType,
        interestType:
          req.body.interestType,
        message: req.body.message,
      });

    res.status(201).json(enquiry);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};