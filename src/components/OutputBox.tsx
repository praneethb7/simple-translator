import { Card, CardHeader, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";

interface outputBoxProps {
    result : string
}

const OutputBox = ({result}:outputBoxProps) => {
    return(
        <Card className="mt-4">
            <CardHeader className="text-sm font-medium text-muted-foreground">
                Output
            </CardHeader>
            <CardContent>
                <Textarea
                    readOnly
                    value={result || "Translation will appear here..."}
                    className="resize-none min-h-[120px] bg-muted text-foreground"
                />
            </CardContent>
        </Card>
    );
}
export default OutputBox;