import type { Role } from '@/types';
import { DEMO_USERS } from './constants';
export function getCurrentRole():Role { if(typeof document==='undefined') return 'registrar'; const value=document.cookie.split('; ').find(x=>x.startsWith('dccs_role='))?.split('=')[1]; return (value as Role)||'registrar'; }
export function setDemoSession(role:Role) { document.cookie=`dccs_role=${role}; path=/; max-age=604800; samesite=lax`; localStorage.setItem('dccs_role',role); }
export function clearSession(){document.cookie='dccs_role=; path=/; max-age=0';localStorage.removeItem('dccs_role');}
export function getDemoUser(role:Role){return DEMO_USERS[role];}
