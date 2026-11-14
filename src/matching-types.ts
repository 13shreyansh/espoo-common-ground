export type Skill = {uri:string; narrower?:string[]};
export type ScoringPerson = {id:string; skills:string[]; interested:string[]; slots:string[]; max:number};
export type ScoringCompany = {id:string; tasks:{id:string;skills:Skill[]}[]; interest:string[];tables:number[];slots:string[]};
export type ScoringInput = {people:ScoringPerson[]; companies:ScoringCompany[]};
type Forbidden='name'|'first_name'|'last_name'|'nationality'|'language'|'school'|'photo'|'stories'|'education'|'career_path'|'group';
type AssertNever<T extends never> = T;
type PersonMustBeBlind = AssertNever<Extract<keyof ScoringPerson,Forbidden>>;
type CompanyMustBeBlind = AssertNever<Extract<keyof ScoringCompany,Forbidden>>;
