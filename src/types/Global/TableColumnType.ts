/**
 * 定义表格列类型
 */
export interface TableColumnType {
    name: string;
    label: string;
    width?: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    formatter?: Function;
}
