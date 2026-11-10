export type Role = 'administrator' | 'registrar' | 'judge' | 'advocate' | 'litigant';
export type CaseStatus = 'Registered' | 'Assigned' | 'In hearing' | 'Adjourned' | 'Decided';
export type HearingStatus = 'Scheduled' | 'Adjourned' | 'Completed';
export interface User { id:number; full_name:string; email:string; phone:string; role_id:number; role:Role; created_at:string; updated_at:string }
export interface Party { id:number; full_name:string; party_type:string; phone:string; email:string; address:string; created_at:string }
export interface CaseRecord { id:number; case_number:string; case_type:string; title:string; description:string; filing_date:string; status:CaseStatus; assigned_judge_id:number|null; judge:string; courtroom:string; parties:string[]; next_hearing:string|null; created_by:number; created_at:string; updated_at:string }
export interface Hearing { id:number; case_id:number; case_number:string; case_title:string; judge_id:number; judge:string; courtroom_id:number; courtroom:string; hearing_date:string; hearing_time:string; status:HearingStatus; notes:string; created_by:number; created_at:string; updated_at:string }
export interface Courtroom { id:number; name:string; location:string; capacity:number; status:string }
export interface CaseHistory { id:number; case_id:number; user_id:number; action:string; description:string; created_at:string; user:string }
export interface Paginated<T> { results:T[]; count:number }
