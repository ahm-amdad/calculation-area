function calculateTriangleArea(){
    const triangleAreaBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleAreaBase.value ;
    const base = parseFloat(triangleBaseText);
    
    const triangleAreaHeight  = document.getElementById('triangle-height');
    const triangleHeightText = triangleAreaHeight.value ;
    const height = parseFloat(triangleHeightText)
    
    // triangle area calculate 
    const area = 0.5 * base * height;
    console.log("Area of the Triangle", area);
    
}