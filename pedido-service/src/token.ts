import * as jwt from 'jsonwebtoken';

export function gerarTokenServico() {
  return jwt.sign(
    { service: 'pedido-service' }, 
    'SEGREDO_MICROSSERVICOS',
    { expiresIn: '5m' }
  );
}
