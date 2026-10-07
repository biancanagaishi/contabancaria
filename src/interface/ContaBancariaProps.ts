// Interface Base
export interface ContaBancariaProps {
  numeroConta: string;
  titular: string;
  saldo: number;
}

// Interface da Conta Corrente (Herda a base)
export interface ContaCorrenteProps extends ContaBancariaProps {
  limiteChequeEspecial: number;
}

// Interface da Conta Poupança (Herda a base)
export interface ContaPoupancaProps extends ContaBancariaProps {
  taxaRendimentoMensal: number;
}
