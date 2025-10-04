import { Response } from 'express';
import { MediaService } from 'src/services/media/media.service';
export declare class UploadController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    getallfile(res: Response): Promise<void>;
    deletefile(filename: string, res: Response): Promise<void>;
    uploadFile(file: any, res: Response): Promise<void>;
    uploadMultiple(files: any, res: Response): void;
}
