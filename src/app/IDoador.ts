export interface IDoador{
  id?: number,
  nomeDoador: string,
  cpfDoador: string,
  senha: string,
  telefone: string,
  logradouro: string,
  numero: string,
  complemento?: string,
  bairro: string,
  cidade: string,
  estado: string,
  cep: string
}
