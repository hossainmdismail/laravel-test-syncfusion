import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {

    const sheetData = [
        ['Name', 'Age', 'Country'],
        ['John', 29, 'USA'],
        ['Anna', 22, 'Canada'],
        ['Mike', 35, 'UK']
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1>Test</h1>
                <SpreadsheetComponent></SpreadsheetComponent>
            </div>
        </AppLayout>
    );
}
