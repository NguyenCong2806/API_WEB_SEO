/// <reference types="multer" />
import { IMediaService } from 'src/services/media/IMediaService';
import SerachPara from 'src/models/BaseModel/SerachPara';
export declare class UploadController {
    private readonly mediaService;
    constructor(mediaService: IMediaService);
    getallfile(serachPara: SerachPara): Promise<import("../../models/BaseModel/Results").default<import("../../models/database/Media").Media>>;
    deletefile(filename: string): Promise<void>;
    uploadFile(file: Express.Multer.File): Promise<void>;
    uploadMultiple(files: Express.Multer.File[]): {
        message: string;
        links: string[];
    };
}
