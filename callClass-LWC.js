import converterLeadLWC from '@salesforce/apex/ConverterLeadLWCController.converterLeadLWC';


            converterLeadLWC({recordId : this.recordId})
            .then(result => {
                this.showSpinner = false;
                if (result.success == true) {
                    this.showToast(this.message, (result.success == true) ? 'Sucesso!' : 'Erro!', (result.success == true) ? 'success' : 'error', 'sticky');

                }
            })
            .catch(error => {
                this.showToast('Ocorreu um erro inesperado', 'Erro!', 'error', 'stricky');
            })
