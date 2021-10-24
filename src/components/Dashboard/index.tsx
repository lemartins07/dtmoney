import { Container } from '../Dashboard/styles';

import { Summary } from '../../components/Summary';
import { TrasactionsTable } from '../TransactionsTable';

export function Dashboard() { 
  
  return (
    <Container>
      <Summary/>
      <TrasactionsTable />
    </Container>
  );
}