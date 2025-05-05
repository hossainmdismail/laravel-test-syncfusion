import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCeExyWmFZfVtgdVdMZVtbQH5PIiBoS35Rc0VmWXpfcnFcRGhbU0VyVEBU');
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
            <div className="flex h-full flex-1 flex-col gap-4 overflow-hidden block rounded-xl p-4">
                <h1>Spreadsheet</h1>
                <SpreadsheetComponent
                    allowOpen={true}
                    allowSave={true}
                    width={'100%'}
                    height={'500px'}
                    showRibbon={true}></SpreadsheetComponent>

                <h1>Document Editor</h1>
                <DocumentEditorContainerComponent
                    id="container"
                    width={'100%'}
                    height={'600px'}
                    enableToolbar={true}
                />
            </div>
        </AppLayout>
    );
}
