"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";
import { useState } from "react";
import { Skeleton } from "~/components/ui/skeleton";

const DEFAULT_PUBKEY =
  "GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK";

export function TransactionList() {
  const [pubKeyInput, setPubKeyInput] = useState(DEFAULT_PUBKEY);
  const [connectedPubKey, setConnectedPubKey] = useState<string | null>(null);

  const { data, isLoading, error } = api.transaction.getAll.useQuery(
    { publicKey: connectedPubKey! },
    { enabled: !!connectedPubKey },
  );

  const { data: accountData, isLoading: isLoadingAccount } =
    api.transaction.getAcc.useQuery(
      { publicKey: connectedPubKey! },
      { enabled: !!connectedPubKey },
    );

  const handleConnect = () => {
    if (pubKeyInput.trim()) {
      setConnectedPubKey(pubKeyInput.trim());
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Stellar Transaction History</h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={pubKeyInput}
            onChange={(e) => setPubKeyInput(e.target.value)}
            placeholder="Enter Stellar public key"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex-1 rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none"
          />
          <button
            onClick={handleConnect}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
          >
            Connect
          </button>
        </div>
      </div>

      {!connectedPubKey && (
        <div className="text-muted-foreground py-12 text-center">
          Enter a Stellar public key and click Connect to view transaction
          history
        </div>
      )}

      {connectedPubKey && isLoading && (
        // <div className="text-center py-12">Loading transactions...</div>
        <div className="space-y-6">
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle className="font-mono text-sm">
              <Skeleton className="h-4 w-2/3" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="font-semibold">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle className="font-mono text-sm">
              <Skeleton className="h-4 w-2/3" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="font-semibold">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle className="font-mono text-sm">
              <Skeleton className="h-4 w-2/3" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="font-semibold">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><Skeleton className="h-4 w-[100px]" /></span>
                <span className="text-sm">
                  {" "}
                  <Skeleton className="h-4 w-[100px]" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      )}

      {connectedPubKey && error && (
        <div className="text-destructive py-12 text-center">
          Error loading transactions: {error.message}
        </div>
      )}

      {connectedPubKey && data?.transactions && (
        <>
          <div className="bg-card space-y-2 rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Account</p>
                <p className="font-mono text-sm">
                  {connectedPubKey.slice(0, 8)}...{connectedPubKey.slice(-8)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground text-sm">XLM Balance</p>
                {isLoadingAccount ? (
                  <p className="text-2xl font-bold">Loading...</p>
                ) : (
                  <p className="text-2xl font-bold">
                    {accountData?.balances.find(
                      (balance) => balance.asset_type === "native",
                    )?.balance || "0"}{" "}
                    XLM
                  </p>
                )}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground">
            Showing {data.transactions.length} transactions
          </p>

          <div className="grid gap-4">
            {data.transactions.map((tx) => (
              <Card
                key={tx.id}
                className="cursor-pointer transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle className="font-mono text-sm">
                    {tx.hash.slice(0, 16)}...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operations:</span>
                      <span className="font-semibold">{tx.operationCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="text-sm">{(tx.timestamp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee:</span>
                      <span className="text-sm">
                        {Number(tx.feeCharged) / 10000000} XLM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Memo:</span>
                      <span className="text-sm">{tx.memo}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span
                        className={`text-xs font-medium ${tx.successful ? "text-green-600" : "text-red-600"}`}
                      >
                        {tx.successful ? "✓ Success" : "✗ Failed"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </>
      )}
    </div>
  );
}
