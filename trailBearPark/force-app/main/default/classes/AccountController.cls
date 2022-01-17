public with sharing class AccountController {
    
    public static void updateAvgCaseResolutionDays(List<Id> accountIds){

        Map<Id, Integer> accountTotalCaseMap = new Map<Id,Integer>();
        Map<Id, Integer> accountTotalCaseDaysMap = new Map<Id,Integer>();

        for(Case caseObj : [SELECT Id, CreatedDate, ClosedDate, AccountId
                            FROM Case
                            WHERE IsClosed = true
                            AND AccountId IN :accountIds]){
            if(!accountTotalCaseMap.containsKey(caseObj.AccountId)){
                accountTotalCaseMap.put(caseObj.AccountId,0);
                accountTotalCaseDaysMap.put(caseObj.AccountId,0);
            }
            Integer totalCases = accountTotalCaseMap.get(caseObj.AccountId);
            totalCases++;
            accountTotalCaseMap.put(caseObj.AccountId, totalCases);
            Integer totalDays = accountTotalCaseDaysMap.get(caseObj.AccountId);
            totalDays += caseObj.CreatedDate.date().daysBetween(caseObj.ClosedDate.date());
            accountTotalCaseDaysMap.put(caseObj.AccountId, totalDays);
        }
        List<Account> accountToUpdade = new List<Account>();
        for(Id accountId : accountTotalCaseMap.keySet()){
            Decimal resolutionDays = accountTotalCaseDaysMap.get(accountId)/accountTotalCaseMap.get(accountId);
            accountToUpdade.add(new Account(
                Id=accountId,
                Avg_Case_Resolution_Days__c=resolutionDays
            ));
        }
        update accountToUpdade;
    }

    /**
     * code test
     * 
    List<Id> accountIds = new List<Id>();

    for(Account acc : [SELECT Id FROM Account]){
        accountIds.add(acc.Id);
    }

    AccountController.updateAvgCaseResolutionDays(accountIds);
     * /
}
