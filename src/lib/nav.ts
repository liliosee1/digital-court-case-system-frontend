import type { Role } from '@/types';
import { LayoutDashboard, BriefcaseBusiness, CalendarDays, Users, Building2, ChartNoAxesColumn, FilePlus2, Scale, CalendarPlus, type LucideIcon } from 'lucide-react';
export interface NavItem { label:string; href:string; icon:LucideIcon }
export const NAV:Record<Exclude<Role,'litigant'>,NavItem[]> = {
 administrator:[{label:'Dashboard',href:'/dashboard',icon:LayoutDashboard},{label:'Cases',href:'/cases',icon:BriefcaseBusiness},{label:'Register case',href:'/cases/new',icon:FilePlus2},{label:'Schedule hearing',href:'/hearings/new',icon:CalendarPlus},{label:'Users and Roles',href:'/users',icon:Users},{label:'Courtrooms',href:'/courtrooms',icon:Building2},{label:'Reports',href:'/reports',icon:ChartNoAxesColumn}],
 registrar:[{label:'Dashboard',href:'/dashboard',icon:LayoutDashboard},{label:'Cases',href:'/cases',icon:BriefcaseBusiness},{label:'Register case',href:'/cases/new',icon:FilePlus2},{label:'Hearing schedule',href:'/hearing-schedule',icon:CalendarDays},{label:'Schedule hearing',href:'/hearings/new',icon:CalendarPlus},{label:'Parties',href:'/parties',icon:Users}],
 judge:[{label:'My cases',href:'/my-cases',icon:BriefcaseBusiness},{label:'All cases',href:'/cases',icon:BriefcaseBusiness},{label:'Hearing schedule',href:'/hearing-schedule',icon:CalendarDays},{label:'New judgment',href:'/judgment/new',icon:Scale}],
 advocate:[{label:'Authorised cases',href:'/authorised-cases',icon:BriefcaseBusiness},{label:'Hearing dates',href:'/hearing-dates',icon:CalendarDays}],
};
export const ROLE_HOME:Record<Role,string>={administrator:'/dashboard',registrar:'/dashboard',judge:'/my-cases',advocate:'/authorised-cases',litigant:'/track'};
