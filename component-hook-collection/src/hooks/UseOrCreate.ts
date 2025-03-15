// key가 string이고 value가 any
const cache: Record<string, any> = {}


// useMemo 와 동일한 역할을 하는 커스텀 훅
export const useOrCreate = <T>(key: string, callback: () => T): T => {
    if(!cache[key]) cache[key] = callback()
    return cache[key] as T 
}