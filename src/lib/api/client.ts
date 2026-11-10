export class ApiError extends Error { constructor(message:string,public status:number){super(message);this.name='ApiError'} }
const API_URL=process.env.NEXT_PUBLIC_API_URL||'http://localhost:8000/api';
export async function request<T>(path:string,init:RequestInit={}):Promise<T>{const token=typeof window!=='undefined'?localStorage.getItem('dccs_token'):null;const headers=new Headers(init.headers);if(!headers.has('Content-Type'))headers.set('Content-Type','application/json');if(token)headers.set('Authorization',`Bearer ${token}`);const response=await fetch(`${API_URL}${path}`,{...init,headers});if(!response.ok){let message='Request failed';try{const body=await response.json() as {detail?:string};message=body.detail||message}catch{}throw new ApiError(message,response.status)}return response.json() as Promise<T>}
export const mocksEnabled=()=>process.env.NEXT_PUBLIC_USE_MOCKS!=='false';
export const delay=(ms=320)=>new Promise(resolve=>setTimeout(resolve,ms));
