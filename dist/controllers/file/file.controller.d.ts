import { Response } from 'express';
export declare class UploadController {
    getallfile(res: Response): Promise<void>;
    deletefile(filename: string, res: Response): Promise<void>;
    uploadFile(file: any, res: Response): void;
    uploadMultiple(files: any, res: Response): void;
}
