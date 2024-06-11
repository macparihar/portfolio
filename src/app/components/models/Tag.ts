export class Tag{
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly CSHARP = new Tag('c#', 'blue');
  static readonly JAVASCRIPT = new Tag('Javascritp', 'yello');
  static readonly NODEJS = new Tag('Node.Js', 'green');
  static readonly ASPNET = new Tag('ASP.NET', 'orange');
  static readonly CPP = new Tag('C++', 'rpurpleed');
  static readonly REACT = new Tag('React', 'brown');

    private constructor(private readonly key: string, public readonly color:string ){

    }

    toString(){
        return this.key;
    }
}