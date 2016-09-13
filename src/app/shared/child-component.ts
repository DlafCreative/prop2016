/**
 * Created by TNN on 31/08/2016
 * This class is intended to make Component decorator inheritance (not natively included, architectural choice)
 * https://github.com/angular/angular/issues/7968
 *
 * In a Component file, call @ChildComponent() decorator instead of @Component(), then create the class component as usual,
 * and extend it with another component. @ChildComponent will automatically extends the parent component decorator.
 * To get parent value of a property, use a function : the parameter will be the parent value.
 */
import {
    Component,
    ElementRef,
    ComponentMetadata
} from '@angular/core';
import { isPresent } from '@angular/core/src/facade/lang';

export function ChildComponent(annotation: any) {
    return function (target: Function) {
        var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
        var parentAnnotations = Reflect.getMetadata('annotations', parentTarget);

        var parentAnnotation = parentAnnotations[0];
        Object.keys(parentAnnotation).forEach(key => {
            if (isPresent(parentAnnotation[key])) {
                // verify is annotation typeof function
                if(typeof annotation[key] === 'function'){
                    annotation[key] = annotation[key].call(this, parentAnnotation[key]);
                }else if(
                    // force override in annotation base
                    !isPresent(annotation[key])
                ){
                    annotation[key] = parentAnnotation[key];
                }
            }
        });

        var metadata = new ComponentMetadata(annotation);

        Reflect.defineMetadata('annotations', [ metadata ], target);
    }
}