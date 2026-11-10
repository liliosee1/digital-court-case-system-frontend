# DCCS API contract

Base URL is read from `NEXT_PUBLIC_API_URL` (default: `http://localhost:8000/api`). Requests send `Content-Type: application/json` and, when present, `Authorization: Bearer <token>`. List responses use `{ "results": [], "count": 0 }`. Errors should return `{ "detail": "Human readable message" }` with an appropriate HTTP status.

## Endpoints

| Method | Endpoint | Request / query | Response |
| --- | --- | --- | --- |
| GET | `/cases/?search=&status=&type=&judge=&page=` | Optional list filters; page is 1-based | `{results: Case[], count: number}` |
| POST | `/cases/` | Case fields excluding generated id/timestamps; participants may be linked by backend policy | `Case` |
| GET | `/cases/{id}/` | — | `Case` including display fields for judge, parties, courtroom and next hearing |
| PATCH | `/cases/{id}/status/` | `{ "status": CaseStatus, "reason": string }` | Updated `Case`; also creates a `case_history` row |
| POST | `/cases/{id}/assign-judge/` | `{ "assigned_judge_id": number }` | Updated `Case`; also creates a history row |
| GET | `/cases/{id}/history/` | — | `CaseHistory[]` in chronological order |
| GET | `/hearings/?case=&judge=&date_from=&date_to=&status=&page=` | Optional filters | `{results: Hearing[], count: number}` |
| POST | `/hearings/` | `case_id`, `judge_id`, `courtroom_id`, `hearing_date`, `hearing_time`, `status`, `notes`; `reason` required when status is `Adjourned` | `Hearing` |
| GET | `/parties/?search=&page=` | Optional filters | `{results: Party[], count: number}` |
| POST | `/parties/` | Party fields excluding id/created_at | `Party` |
| GET | `/courtrooms/?status=&page=` | Optional filters | `{results: Courtroom[], count: number}` |
| POST | `/courtrooms/` | `name`, `location`, `capacity`, `status` | `Courtroom` |
| GET | `/users/?role=&search=&page=` | Optional filters | `{results: User[], count: number}` |
| POST | `/users/` | `full_name`, `email`, `phone`, `role_id` | `User` |
| GET | `/reports/summary/` | — | `{total_cases, active_cases, hearings_this_week, decided_cases, monthly}` |
| GET | `/track/{case_number}/` | Public; case number URL-encoded | Public case status, judge, courtroom and next hearing fields |

## Database shapes

`users(id, full_name, email, phone, role_id, created_at, updated_at)`; `roles(id, name)`; `parties(id, full_name, party_type, phone, email, address, created_at)`; `cases(id, case_number, case_type, title, description, filing_date, status, assigned_judge_id, created_by, created_at, updated_at)`; `case_participants(id, case_id, party_id)`; `case_history(id, case_id, user_id, action, description, created_at)`; `hearings(id, case_id, judge_id, courtroom_id, hearing_date, hearing_time, status, notes, created_by, created_at, updated_at)`; `courtrooms(id, name, location, capacity, status)`.

`CaseStatus`: `Registered | Assigned | In hearing | Adjourned | Decided`. `HearingStatus`: `Scheduled | Adjourned | Completed`.
