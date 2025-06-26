import 'cypress-xpath';
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros da aplicação que não interferem no teste
  if (err.message.includes('cardModuleFactory')) {
    return false;
  }

  // Permite que outros erros continuem sendo tratados normalmente
  return true;
});
