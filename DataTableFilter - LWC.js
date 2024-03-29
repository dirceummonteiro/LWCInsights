searchTask() {
    this.currentPage = 1;
    var data = JSON.parse(JSON.stringify(this.dataBackup)),
        term = this.template.querySelector('[data-id="filter"]').value,
        results = data, regex;
    
    this.filterTask = term;
    
    // console.log('results = ', results);
    // console.log('filter', term);

    
    this.showTable = false;
    this.showSpinner = true;

    if (term) {
        if (results) {
            try {
                regex = new RegExp(term, "i");                    
                results = results.filter( row =>  
                                            regex.test(row.Site) ||
                                            regex.test(row.ProjectNumber) ||
                                            regex.test(row.ProjectName) ||
                                            regex.test(row.SiterraProjectStatus) ||
                                            regex.test(row.StatusProjetoiEng) ||
                                            regex.test(row.EngineeringAnalystiEng) ||
                                            regex.test(row.engTaskRecordTypeName) ||
                                            regex.test(row.lastProjectTrackingComment) ||
                                            regex.test(row.SubtaskNumber) ||
                                            regex.test(row.SubtaskMasterStatus) ||
                                            regex.test(row.SubtaskRejected) ||
                                            regex.test(row.SubtaskNA) ||
                                            regex.test(row.OpptyName) ||
                                            regex.test(row.ParentCompanyName) ||
                                            regex.test(row.SubtaskActiveDate)
                                        
                                    );
                
                                    

            } catch(e) {
                console.log("ERRO >>> " + e);
                results = data;
            }

            // console.log('results', results);
        }
        
    }

    this.data = results;
    this.dataFilter = results;

    this.calculateLength();
    this.preparePaginationList();
    
    this.showTable = true;
    this.showSpinner = false;

}
