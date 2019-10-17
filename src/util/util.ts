class Util {
    public static info(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams);
    }
    public static log(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams);
    }
    public static debug(message?: any, ...optionalParams: any[]): void {
        console.log(message, ...optionalParams);
    }

    public static calcRadian(dirX:number, dirY:number): number {
        let drawOffset = Math.sqrt(dirX * dirX + dirY * dirY)
        if (drawOffset == 0) {
            return 0;
        }
        let radian = Math.asin(dirY / drawOffset)
        if (dirX >=0 && dirY >= 0) {
            //
        } else if (dirX < 0 && dirY >= 0) {
            radian = Math.PI - radian;
        } else if (dirX <= 0 && dirY < 0) {
            radian = Math.PI - radian;
        } else if (dirX > 0 && dirY < 0) {
            radian = Math.PI * 2 + radian;
        }
        return parseFloat(radian.toFixed(5));
    }
}