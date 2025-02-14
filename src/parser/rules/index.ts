import * as es from 'estree'

import { Rule } from '../../types'

import bracesAroundFor from './bracesAroundFor'
import bracesAroundIfElse from './bracesAroundIfElse'
import bracesAroundWhile from './bracesAroundWhile'
import forStatementMustHaveAllParts from './forStatementMustHaveAllParts'
import noDeclareMutable from './noDeclareMutable'
import noDotAbbreviation from './noDotAbbreviation'
import noEval from './noEval'
import noHolesInArrays from './noHolesInArrays'
import noIfWithoutElse from './noIfWithoutElse'
import noImplicitDeclareUndefined from './noImplicitDeclareUndefined'
import noImplicitReturnUndefined from './noImplicitReturnUndefined'
import noNull from './noNull'
import noUnspecifiedLiteral from './noUnspecifiedLiteral'
import noUnspecifiedOperator from './noUnspecifiedOperator'
import noUpdateAssignment from './noUpdateAssignment'
import noVar from './noVar'
import singleVariableDeclaration from './singleVariableDeclaration'
import noTemplateExpression from './noTemplateExpression'
import noSpreadInArray from './noSpreadInArray'

const rules: Rule<es.Node>[] = [
  bracesAroundFor,
  bracesAroundIfElse,
  bracesAroundWhile,
  forStatementMustHaveAllParts,
  noDeclareMutable,
  noDotAbbreviation,
  noIfWithoutElse,
  noImplicitDeclareUndefined,
  noImplicitReturnUndefined,
  noNull,
  noUnspecifiedLiteral,
  noUnspecifiedOperator,
  noUpdateAssignment,
  noVar,
  singleVariableDeclaration,
  noEval,
  noHolesInArrays,
  noTemplateExpression,
  noSpreadInArray
]

export default rules
