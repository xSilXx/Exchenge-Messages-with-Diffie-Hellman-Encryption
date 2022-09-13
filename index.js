function GenerateUser(){
    const LockKey = GenerateLockScript()
    const UnlockKey = GenerateUnlockScript(LockKey)
    const m = Cript(UnlockKey)

    return { LockKey, UnlockKey, m}
}

function GenerateLockScript(){
    const LockKey = Date.now()
    return LockKey
}

function GenerateUnlockScript(LockKey){
    const Hash1 = 1
    const Hash2 = 2 

    const UnlockKey = Math.sqrt(LockKey**3 + Hash1*LockKey + Hash2)
    return Number(String(UnlockKey).replace('.', ''))
}

function Cript(UnlockKey){
    const m1 = 12345
    const m = UnlockKey**m1

    return m
}

console.log(GenerateUser())
