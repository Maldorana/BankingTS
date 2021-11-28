import { Statement } from './Statement';

export interface StatementRepository {
  getAllStatements(): Statement[];
  addStatement(statement: Statement): void;
}
