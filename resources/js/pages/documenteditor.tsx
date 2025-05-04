import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    DocumentEditorComponent,
    Toolbar,
    Inject,
} from '@syncfusion/ej2-react-documenteditor';

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
                <DocumentEditorComponent
                    id="documenteditor"
                    height="600px"
                    enableToolbar={true}
                    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
                >
                    <Inject services={[Toolbar]} />
                </DocumentEditorComponent>
            </div>
        </AppLayout>
    );
}
