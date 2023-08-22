function solution(nums) {
    const pickedPonkemons = new Set(nums);
    console.log(pickedPonkemons.size);
    console.log(nums.length/2);
    return pickedPonkemons.size > nums.length/2 ? nums.length/2 : pickedPonkemons.size;
}