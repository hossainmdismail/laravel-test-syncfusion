import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    DocumentEditorContainerComponent,
    Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

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
                <DocumentEditorContainerComponent
                    id="container"
                    width={'80%'}
                    height={'80%'}
                    enableToolbar={true}
                />
            </div>
        </AppLayout>
    );
}
