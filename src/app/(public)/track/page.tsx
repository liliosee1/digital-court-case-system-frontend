'use client';

import {useState} from 'react';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button, Card, Chip, FormField, Input, Spinner} from '@/components/ui';
import {FlagMark} from '@/components/layout/FlagMark';
import {trackService} from '@/lib/api/services/track';
import type {CaseRecord} from '@/types';

export default function TrackPage() {
  const [number, setNumber] = useState('');
  const [record, setRecord] = useState<CaseRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setRecord(null);
    try {
      setRecord(await trackService.get(number.trim()));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to find the case.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-page-bg">
      <header className="bg-navy px-4 py-4 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <FlagMark className="h-6 w-[34px]" />
            <b className="text-sm">Republic of Rwanda · Gasabo Primary Court</b>
          </div>
        </div>
      </header>
      <div className="h-[5px] bg-[linear-gradient(90deg,#00A1DE_50%,#FAD201_50%_75%,#20603D_75%)]" />
      <div className="mx-auto w-full max-w-[800px] flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">Track your case</h1>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Enter your case number to see its status and next hearing date. No login needed.
        </p>
        <Card className="mt-5">
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <FormField label="Case number" hint="Example: RC 00123/2026">
                <Input
                  value={number}
                  onChange={event => setNumber(event.target.value)}
                  placeholder="RC 00123/2026"
                  required
                  aria-label="Case number"
                />
              </FormField>
            </div>
            <Button type="submit" disabled={loading || !number.trim()} className="w-full sm:w-auto">
              {loading ? 'Checking…' : 'Check status'}
            </Button>
          </form>
        </Card>
        {loading && <Card className="mt-5"><Spinner /></Card>}
        {error && (
          <div role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {error}
          </div>
        )}
        {record && (
          <Card className="mt-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="break-words text-base font-bold text-ink">{record.case_number} · {record.title}</h2>
              <Chip>{record.status}</Chip>
            </div>
            <div className="mt-5 grid gap-4 text-sm text-ink sm:grid-cols-2">
              <div>
                <p className="text-xs text-muted">Next hearing</p>
                <p className="mt-1 font-semibold">
                  {record.next_hearing
                    ? new Date(record.next_hearing).toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                    : 'No hearing scheduled'}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted">Courtroom</p>
                <p className="mt-1 font-semibold">{record.courtroom}</p>
              </div>
              <div>
                <p className="text-xs text-muted">Assigned judge</p>
                <p className="mt-1 font-semibold">{record.judge}</p>
              </div>
            </div>
          </Card>
        )}
      </div>
      <footer className="mx-auto w-full max-w-[800px] px-4 pb-8 sm:px-6">
        <Link
          href="/login"
          className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold text-navy hover:bg-slate-200"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to staff sign in
        </Link>
      </footer>
    </main>
  );
}
