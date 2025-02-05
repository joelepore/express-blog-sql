const notFound = (req, res, next) => {
  res.status(404);
  res.json({
    status: 404,
    message: 'Risorsa non trovata'
  })
}

export default notFound;