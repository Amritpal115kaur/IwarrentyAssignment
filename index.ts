import * as XLSX from 'xlsx';
import type { IRecords } from './types';

const FILE_PATH = 'resources/iw-tech-test-retailer-data.xlsx';

const workbook = XLSX.readFile(FILE_PATH);
const sheetName = workbook.SheetNames[0];
const data = workbook.Sheets[sheetName];
const rowData = [] = XLSX.utils.sheet_to_json(data);

const filteredData = rowData.map((record: IRecords) => {
   
    return {
        postId: record.content_post_id,
        postSlug: record.content_post_slug,
        postTitle: record.content_post_title,
        directoryCategory: record.directory_category,
        childrenCount: record.content_children_count,
        postStatus: record.content_post_status,
        body: record.content_body || "",
        contact: {
            email: record.directory_contact__email || "",
            phone: record.directory_contact__phone || "",
            website: record.directory_contact__website || "",
            mobile: record.directory_contact__mobile || ""
        },
        location: {
            street: record.directory_location__street || "",
            address: record.directory_location__address || "",
            city: record.directory_location__city || "",
            country: record.directory_location__country || "",
            latitude: record.directory_location__lat,
            longitude: record.directory_location__lng,
            zip: record.directory_location__zip,
            state: record.directory_location__state || ""
        },
        social:{
            facebook : record.directory_social__facebook || "",
            googleplus: record.directory_social__googleplus || "",
            twitter: record.directory_social__twitter || "",
        }
    };
});

filteredData.forEach((record: any) => {
    console.log(JSON.stringify(record));
});
