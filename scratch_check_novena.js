const fs = require('fs');

function checkFile(filePath) {
    console.log('=== Checking', filePath, '===');
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Simple parser to find novena definitions and their days
    // Let's search for "key: {" and inside it "days: ["
    // Since novenas are top level fields of an object exported, e.g. "export const novenaData: Record<string, Novena> = {"
    // or "const novenasFevereiroSetembro = {"
    const novenaRegex = /(\w+):\s*\{[\s\S]*?days:\s*\[([\s\S]*?)\]/g;
    let match;
    while ((match = novenaRegex.exec(content)) !== null) {
        const key = match[1];
        if (key === 'days' || key === 'versions') continue;
        const daysBlock = match[2];
        const dayCount = (daysBlock.match(/day:\s*["']/g) || []).length;
        if (dayCount < 9) {
            console.log(`Novena [${key}] has only ${dayCount} days.`);
        }
    }
}

try {
    checkFile('src/lib/novenas-fev-set.ts');
    checkFile('src/lib/data.ts');
} catch (err) {
    console.error(err);
}
