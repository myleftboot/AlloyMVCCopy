/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"mwW06innCJzmyiBhdsYpPEVov7cd1uZc"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"vuchhs7aWpN8CaBCvtnf3yW4hAcxO19y"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"FnRIWH1PTH977Dr89AnTg4HmWW9M6ELn"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"RAnclZqzBXp8qOhINqYNqoVOkYUzrY1U"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"iE7Zp0Ka1quaaKDdPyLJAnhlYYzGG5DN"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"RqE0lZAgghh8cYiGBRf8Nsw6Jd9Jkg3k"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
