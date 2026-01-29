import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export function TransactionSkeletonCard() {
  return (
    <Card className="animate-pulse cursor-default">
      <CardHeader>
        <CardTitle className="font-mono text-sm">
          <Skeleton className="h-4 w-2/3" />
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-between">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        ))}

        <div className="flex justify-between pt-1">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 w-[60px]" />
        </div>
      </CardContent>
    </Card>
  );
}
