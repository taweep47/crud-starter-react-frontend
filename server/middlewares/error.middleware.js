export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(
      (e) => e.message
    );

    return res.status(400).json({
      message: "Validation error",
      errors,
    });
  }

  // Default
  res.status(500).json({
    message: "Server error",
  });
};
