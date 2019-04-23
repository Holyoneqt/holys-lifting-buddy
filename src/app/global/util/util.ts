import { AppData } from 'src/app/models/data.model';

export namespace Global.Util {

    /** Checks wheter the user has selected an template as 'in use' */
    export function templateInUseSelected(appData: AppData): boolean {
        const templateInUse = appData.templates.find(template => template.inUse === true);
        return templateInUse !== undefined;
    }

}
