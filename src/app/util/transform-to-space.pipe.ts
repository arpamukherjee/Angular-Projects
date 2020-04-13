import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'transformToSpace'
})
export class TransformToSpacesPipe implements PipeTransform{

    public transform(value : string, character : string) : string {
        //console.log("Inside custom Pipe, value, character"+ value + " "+ character);
        return value.replace(character, ' ');
    }
}