export class SearchAdmin {  
        
        UserID : string='';

        Name : string='';

        AssociateId : string='';

        Mobile  : string='';

        Email : string='';

        HTMLCSSJAVASCRIPT: number=0;

        ANGULAR : number=0;

        REACT : number=0;

        AspNetCore: number=0;

        RESTFUL : number=0;

        EntityFramework: number=0;

        GIT : number=0;

        DOCKER : number=0;

        JENKINS : number=0;

        Azure : number=0;

        SPOKEN : number=0;

        COMMUNICATION: number=0;

        APTITUDE : number=0;

        CreationDate : string='';

        constructor(data: any) {
            this.UserID= data ? data.UserID : "";
            this.Name = data ? data.Name : "";
            this.Email = data ? data.Email : "";
            this.Mobile = data ? data.Mobile : "";
            this.AssociateId = data ? data.AssociateId : "";
            this.HTMLCSSJAVASCRIPT = data ? data.HTMLCSSJAVASCRIPT : 0;            
            this.ANGULAR = data ? data.ANGULAR : 0; 
            this.REACT = data ? data.REACT : 0; 
            this.AspNetCore = data ? data.AspNetCore : 0;            
            this.RESTFUL = data ? data.RESTFUL : 0; 
            this.EntityFramework = data ? data.EntityFramework : 0; 
            this.GIT = data ? data.GIT : 0;            
            this.DOCKER = data ? data.DOCKER : 0; 
            this.JENKINS = data ? data.JENKINS : 0; 
            this.Azure = data ? data.Azure : 0; 
            this.SPOKEN = data ? data.SPOKEN : 0;            
            this.COMMUNICATION = data ? data.COMMUNICATION : 0; 
            this.APTITUDE = data ? data.APTITUDE : 0; 
            this.CreationDate = data ? data.CreationDate : ""; 
       
        }
  
}
