const serverError = (err, req, res, next) => {
  res.status(500);
  res.json({
    error: err.message,
    status: 500,
    message: 'Internal Server Error'
  })
}

export default serverError;