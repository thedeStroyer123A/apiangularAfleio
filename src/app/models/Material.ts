export class material {
  Id : string ;
  Brand : string ;
  Type : string ;
  RegistrationNumber : string ;
  GrayCardNumber : number ;
  ContractType : string ;
  ContractName : string ;

  constructor( Id : string, Brand :string, Type:string, RegistrationNumber: string, GrayCardNumber: number,ContractType: string, ContractName: string ) {
    this.Id = Id;
    this.Brand = Brand;
    this.Type = Type;
    this.RegistrationNumber = RegistrationNumber;
    this.GrayCardNumber = GrayCardNumber;
    this.ContractType = ContractType;
    this.ContractName = ContractName;


  }
}
