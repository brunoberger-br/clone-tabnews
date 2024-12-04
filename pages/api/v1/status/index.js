function status(request, response) {
  response.status(200).json(
    {
      chave: "estão acima da média"
    }
  );
}

export default status