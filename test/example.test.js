// IMPORT MODULES under test here:
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem should display list data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul class="list-detail"><p>5 testing</p></ul>`;
    
    const item = {
        name: 'testing',
        qty: '5',
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem(item);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
