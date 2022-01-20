import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives';
import {configureTestSuite} from 'ng-bullet';
import {fromEvent} from 'rxjs';

describe('TuiLazyLoading directive', () => {
    // converted https://picsum.photos/1/1 to base64
    // for exclude network troubles when testing
    const picsumPhotos =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDeRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABwAAkAcABAAAADAyMTABkQcABAAAAAECAwCGkgcAFgAAAMAAAAAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAAEAAAADoAQAAQAAAAEAAAAAAAAAQVNDSUkAAABQaWNzdW0gSUQ6IDY3Nf/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIAAEAAQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGOE//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQC//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z';

    @Component({
        template: `
            <img id="image" loading="lazy" src="${picsumPhotos}" alt="picsum" />
        `,
    })
    class TestComponent {}

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiLazyLoadingModule],
            declarations: [TestComponent],
        });
    });

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();
    });

    it('Image has background color', () => {
        expect(getHtmlImage().style.backgroundColor).toBe('rgba(0, 0, 0, 0.16)');
    });

    it('Loading animation is shown', () => {
        expect(getHtmlImage().style.animationName).toContain('tuiSkeletonVibe');
    });

    it('Loading animation is cancelled after image load', done => {
        fromEvent(getHtmlImage(), 'load').subscribe(() => {
            fixture.detectChanges();
            expect(getHtmlImage().style.animationName).toBe('');
            done();
        });
    });
});

function getHtmlImage(): HTMLImageElement {
    return document.querySelector('#image')! as HTMLImageElement;
}
