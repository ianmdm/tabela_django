import json

contatos = {
  "roberta miranda": {
    "nome": "Roberta Miranda",
    "telefone": "79387498374",
    "email": "roberta@miranda.com"
  },
  "roberta silva": {
    "nome": "Roberta Silva",
    "telefone": "98273498",
    "email": "roberta@silva.com"
  },
}

with open('contatos.json', 'w') as f:
  json.dump(contatos, f)