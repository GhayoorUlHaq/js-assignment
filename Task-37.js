const make_shirt = (size, message) => {
    if(size === 'L' || size === 'M'){
        console.log("I love Javascript");
    }else{
        console.log(`${size} size shirt with message ${message} on it`);
    }
}

make_shirt('L','Just Do It');
make_shirt('M','Just Do It');
make_shirt('XL','Just Do It');
make_shirt('XXL','Just Do It');
make_shirt('S','Just Do It');
